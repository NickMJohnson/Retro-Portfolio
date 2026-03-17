import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// ============ PLACEHOLDER: Replace with your RAG API call ============
async function askAI(question: string, _history: Message[]): Promise<string> {
  await new Promise((r) => setTimeout(r, 1200));
  return `Thanks for asking! I'm a placeholder response. The real AI backend will be connected soon. You asked: "${question}"`;
}

export const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm an AI assistant that knows about this portfolio's owner — their projects, skills, and experience. Ask me anything!",
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
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const reply = await askAI(trimmed, [...messages, userMessage]);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, something went wrong. Please try again." }]);
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
            This is an AI assistant trained on documents about my background, projects, and experience. Ask me anything!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto glass-card-strong !p-0 overflow-hidden">
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex gap-3", msg.role === "user" && "flex-row-reverse")}>
                  <div
                    className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center shrink-0",
                      msg.role === "assistant"
                        ? "gradient-bg text-white"
                        : "bg-white/15 text-foreground backdrop-blur-sm"
                    )}
                  >
                    {msg.role === "assistant" ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                  </div>
                  <div
                    className={cn(
                      "max-w-[75%] rounded-2xl px-4 py-2.5 text-sm",
                      msg.role === "assistant"
                        ? "bg-white/10 dark:bg-white/5 text-foreground backdrop-blur-sm"
                        : "gradient-bg text-white"
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center gradient-bg text-white shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white/10 dark:bg-white/5 rounded-2xl px-4 py-2.5 text-sm text-muted-foreground backdrop-blur-sm">
                    Thinking…
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="border-t border-white/10 p-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about my projects, skills, or experience…"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none px-3"
              />
              <Button size="sm" onClick={handleSend} disabled={isLoading || !input.trim()} className="rounded-full gradient-bg border-0 text-white hover:opacity-90">
                <Send className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
