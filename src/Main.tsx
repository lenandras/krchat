import { LeftPane } from "./LeftPane"
import { RightPane } from "./RightPane"
import "./Main.less"
import { useEffect,useState } from "preact/hooks";
import { chatService, ConversationDto } from "../ChatService";

export function Main() {
    let [selected, setSelected] = useState<ConversationDto>();
    const mainClass = selected ? "right" : "left";
    return <div class={mainClass}>
        <LeftPane selected={selected} onSelect={setSelected} />
        <RightPane conversation={selected} onBack={() => setSelected(undefined)}/>
    </div>
}