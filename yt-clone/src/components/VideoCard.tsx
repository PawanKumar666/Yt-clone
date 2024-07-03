export default function VideoCard(){
    return (
        <div>
            <img src="/videocard.jpg" className="rounded-xl"></img>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1 pt-2">
                    <img className="rounded-full w-14 h-14" src="/vcprofile.jpg"></img>
                </div>
                <div className="col-span-11 pl-4">
                    <div>
                    The Jasprit Bumrah Juggernaut
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                        Cricket Fanatic
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                        1 Bn Views | 5 Mins ago
                    </div>
                </div>
            </div>
        </div>
    )
}