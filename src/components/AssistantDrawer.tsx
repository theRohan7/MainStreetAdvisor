'use client';

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ChevronLeft, ChevronRight, Send, Bot } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function AssistantDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const mockConversation = [
    {
      role: "assistant",
      content: "Hi! I'm your Magnifi Assistant. I can help you analyze portfolios, generate reports, and answer questions about your clients' investments."
    },
    {
      role: "user", 
      content: "Show me the top performing portfolios this month"
    },
    {
      role: "assistant",
      content: "Based on your current data, here are the top 3 performing portfolios this month:\n\n1. Johnson Family Trust: +4.2%\n2. Smith Retirement Portfolio: +3.8%\n3. Anderson Growth Strategy: +3.5%\n\nWould you like me to generate a detailed performance report?"
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage("");
      // Handle message sending logic here
    }
  };

  return (
    <>
      {/* Drawer Pull Tab */}
      <div 
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-l-lg rounded-r-none h-[200px] w-[48px] bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg m-[0px] p-[7px]"
          variant="default"
        >
          <span className="text-[16px] font-medium writing-mode-vertical-lr rotate-90">
            Assistant
          </span>
        </Button>
      </div>

      {/* Drawer Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white border-l border-border shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Magnifi Assistant</h3>
                <p className="text-sm text-muted-foreground">AI-powered insights</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {mockConversation.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <Card className={`max-w-[80%] ${
                  msg.role === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted'
                }`}>
                  <CardContent className="p-3">
                    <p className="text-sm whitespace-pre-line">{msg.content}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                placeholder="Ask about portfolios, clients, or market insights..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                size="icon"
                disabled={!message.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              AI responses are for informational purposes only and should not be considered financial advice.
            </p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}