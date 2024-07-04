export default function VideoCard(props){
    return (
        <div>
            <img src={props.thumbnail} className="rounded-xl"></img>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1 pt-2">
                    <img className="rounded-full w-10 h-10" src={props.channelLogo}></img>
                </div>
                <div className="col-span-11 pl-4">
                    <div>
                    {props.title}
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                        {props.channel}
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                        {props.views} Views | {props.uploaded} ago
                    </div>
                </div>
            </div>
        </div>
    )
}