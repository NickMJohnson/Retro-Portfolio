import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

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
      content: "Hi! I'm an AI assistant that knows about Nick's projects, skills, and experience. Ask me anything!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

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
            <div className="h-80 overflow-y-auto p-4 space-y-4">
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

            <div className="border-t border-border p-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="$ ask_about --projects --skills --experience"
                className="cyber-input flex-1 !border-0 !bg-transparent"
              />
              <Button
                size="sm"
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-primary/10 text-primary border border-primary hover:bg-primary/20 font-mono text-xs"
              >
                <Send className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
