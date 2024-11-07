import { useState } from "preact/hooks";
import { TextInputAndButton } from "./TextInputAndButton";
import "./RightPane.less"
import { chatService, ConversationDto } from "../ChatService";
import { ConversationCard } from "./ConversationCard";
import { MessageCard } from "./MessageCard";
import { IconButton } from "./IconButton";

export function RightPane({ conversation, onBack }: { conversation?: ConversationDto; onBack(): void }) {
    let [message, setMessage] = useState("");
    return <div class="RightPane">
        {!!conversation && <>
            <div class="conversation-header">
                <button
                    className="backbutton"
                    onClick={onBack}>
                    Back
                </button>
                <p>{conversation.name}</p>
            </div>
            <div class="messages">
                {conversation.lastMessages.map(x =>
                    <MessageCard key={x.timeStamp} message={x}
                        own={x.senderId === chatService.inbox.user.id} />
                )}
            </div>
            <TextInputAndButton
                value={message}
                onChange={setMessage}
                buttonContent="Send"
                placeholder="Write a message..."
                onClick={() => {
                    if (message) {
                        chatService.send({
                            type: "message", channelId: conversation.channelId, referenceTo: 0, contentType: 0, content: message
                        });
                        setMessage("");
                    }
                }} />
        </>}
    </div>
}