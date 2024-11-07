import "./IconButton.less"

export type IconButtonProps = {
    icon: string;
    text: string;
    onClick : () => void;
}

export function IconButton ({ icon, text, onClick }: IconButtonProps){
    return (
        <button
        type = "button" onClick = { onClick }>
        <span class="material-symbols-outlined" >
        login
        </span >
    </button > 
    );
};
      