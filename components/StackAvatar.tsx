import { FC } from "react";

type StackAvatarProps = {
    srcArray : string[]
}

const StackAvatar : FC<StackAvatarProps> = ({srcArray}) => {
    const count = srcArray.length;
    return (<>
        <div className="flex">
            {srcArray.map((src, i) => {
                if(i === 0){
                    return <img className="w-12 h-12 rounded-full border-4 border-white" key={src} src={src} alt="Profile Photo" />
                }
                return <img className="w-12 h-12 rounded-full border-4 border-white -ml-4" key={src} src={src} alt="Profile Photo" />
            })}
            <span className="flex w-12 h-12 rounded-full items-center justify-center -ml-4 border-4 border-white bg-gray-200">{count}</span>
        </div>
    </>
    )
}

export default StackAvatar;