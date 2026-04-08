import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

const DAILY_LIMIT = 5;
const STORAGE_KEY = "chat_usage";

function getUsage(): { count: number; date: string } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { count: 0, date: "" };
}

function incrementUsage(): number {
  const today = new Date().toISOString().slice(0, 10);
  const usage = getUsage();
  const count = usage.date === today ? usage.count + 1 : 1;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ count, date: today }));
  return count;
}

function getRemainingQueries(): number {
  const today = new Date().toISOString().slice(0, 10);
  const usage = getUsage();
  if (usage.date !== today) return DAILY_LIMIT;
  return Math.max(0, DAILY_LIMIT - usage.count);
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

async function askAI(messages: Message[]): Promise<string> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  if (!res.ok) throw new Error("Request failed");

  const data = await res.json();
  return data.reply;
}

export const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm an AI assistant trained on Nick's projects, skills, and experience. Ask me anything!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [remaining, setRemaining] = useState(getRemainingQueries);
  const bottomRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length <= 1) return;
    const container = chatContainerRef.current;
    if (container) container.scrollTop = container.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    if (remaining <= 0) {
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: "You've reached the 5 query daily limit. Come back tomorrow!",
      }]);
      return;
    }

    const userMessage: Message = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);
    const newCount = incrementUsage();
    setRemaining(Math.max(0, DAILY_LIMIT - newCount));

    try {
      // Send only user/assistant turns (exclude the initial greeting which has no API history)
      const apiMessages = updatedMessages.slice(1); // skip the initial assistant greeting
      const reply = await askAI(apiMessages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Error: connection lost. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chat">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading"><span className="gradient-text">Ask Me Anything</span></h2>
          <p className="section-subheading">
            // AI assistant trained on my background, projects, and experience
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto cyber-card !p-0 overflow-hidden">
            <div ref={chatContainerRef} className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex gap-3", msg.role === "user" && "flex-row-reverse")}>
                  <div
                    className={cn(
                      "w-7 h-7 flex items-center justify-center shrink-0 border",
                      msg.role === "assistant"
                        ? "border-primary text-primary"
                        : "border-accent text-accent"
                    )}
                  >
                    {msg.role === "assistant" ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                  </div>
                  <div
                    className={cn(
                      "max-w-[75%] px-4 py-2.5 text-xs font-mono whitespace-pre-wrap",
                      msg.role === "assistant"
                        ? "bg-muted/50 text-foreground border border-border"
                        : "bg-primary/10 text-primary border border-primary/30"
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-7 h-7 flex items-center justify-center shrink-0 border border-primary text-primary">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-muted/50 border border-border px-4 py-2.5 text-xs font-mono text-primary animate-pulse-glow">
                    processing_query...
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="border-t border-border p-3 flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="$ ask_about --projects --skills --experience"
                  className="cyber-input flex-1 !border-0 !bg-transparent"
                  disabled={remaining <= 0}
                />
                <Button
                  size="sm"
                  onClick={handleSend}
                  disabled={isLoading || !input.trim() || remaining <= 0}
                  className="bg-primary/10 text-primary border border-primary hover:bg-primary/20 font-mono text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                </Button>
              </div>
              <p className={cn("text-xs font-mono text-right", remaining <= 1 ? "text-destructive/70" : "text-muted-foreground/50")}>
                {remaining} / {DAILY_LIMIT} queries remaining today
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
