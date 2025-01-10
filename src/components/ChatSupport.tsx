import { useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { toast } from "./ui/use-toast";

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "¡Hola! ¿En qué podemos ayudarte?", isUser: false },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    setMessages([...messages, { text: message, isUser: true }]);
    setMessage("");

    // Simular respuesta del soporte
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Gracias por tu mensaje. Nuestro equipo se pondrá en contacto contigo pronto.",
          isUser: false,
        },
      ]);
    }, 1000);

    toast({
      title: "Mensaje enviado",
      description: "Pronto recibirás una respuesta de nuestro equipo.",
    });
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 z-50 right-4 rounded-full p-4 bg-pink-400 hover:bg-pink-500"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed z-50 bottom-4 right-4 w-80 h-96 flex flex-col shadow-lg">
          <div className="p-4 bg-pink-400 text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat de Soporte</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-pink-500"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isUser
                      ? "bg-pink-400 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button
                onClick={handleSendMessage}
                className="bg-pink-400 hover:bg-pink-500"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatSupport;