import VideoCard from "./VideoCard";

const VIDEOS = [{
    thumbnail : "./videocard.jpg" ,
      channelLogo : "./vcprofile.jpg" ,
      title : "The Jasprit Bumrah Juggernaut",
      channel : "Cricket Fanatic" ,
      views : "1 Bn" ,
      uploaded : "5 Mins",
},
{
    thumbnail : "./videocard.jpg" ,
      channelLogo : "./vcprofile.jpg" ,
      title : "The Jasprit Bumrah Juggernaut",
      channel : "Cricket Fanatic" ,
      views : "1 Bn" ,
      uploaded : "5 Mins",
},
{
    thumbnail : "./videocard.jpg" ,
      channelLogo : "./vcprofile.jpg" ,
      title : "The Jasprit Bumrah Juggernaut",
      channel : "Cricket Fanatic" ,
      views : "1 Bn" ,
      uploaded : "5 Mins",
},
{
    thumbnail : "./videocard.jpg" ,
      channelLogo : "./vcprofile.jpg" ,
      title : "The Jasprit Bumrah Juggernaut",
      channel : "Cricket Fanatic" ,
      views : "1 Bn" ,
      uploaded : "5 Mins",
},
{
    thumbnail : "./videocard.jpg" ,
      channelLogo : "./vcprofile.jpg" ,
      title : "The Jasprit Bumrah Juggernaut",
      channel : "Cricket Fanatic" ,
      views : "1 Bn" ,
      uploaded : "5 Mins",
},
{
    thumbnail : "./videocard.jpg" ,
      channelLogo : "./vcprofile.jpg" ,
      title : "The Jasprit Bumrah Juggernaut",
      channel : "Cricket Fanatic" ,
      views : "1 Bn" ,
      uploaded : "5 Mins",
},
{
    thumbnail : "./videocard.jpg" ,
      channelLogo : "./vcprofile.jpg" ,
      title : "The Jasprit Bumrah Juggernaut",
      channel : "Cricket Fanatic" ,
      views : "1 Bn" ,
      uploaded : "5 Mins",
},
{
    thumbnail : "./videocard.jpg" ,
      channelLogo : "./vcprofile.jpg" ,
      title : "The Jasprit Bumrah Juggernaut",
      channel : "Cricket Fanatic" ,
      views : "1 Bn" ,
      uploaded : "5 Mins",
},
{
    thumbnail : "./videocard.jpg" ,
      channelLogo : "./vcprofile.jpg" ,
      title : "The Jasprit Bumrah Juggernaut",
      channel : "Cricket Fanatic" ,
      views : "1 Bn" ,
      uploaded : "5 Mins",
},
{
    thumbnail : "./videocard.jpg" ,
      channelLogo : "./vcprofile.jpg" ,
      title : "The Jasprit Bumrah Juggernaut",
      channel : "Cricket Fanatic" ,
      views : "1 Bn" ,
      uploaded : "5 Mins",
},

{
    thumbnail : "./videocard.jpg" ,
      channelLogo : "./vcprofile.jpg" ,
      title : "The Jasprit Bumrah Juggernaut",
      channel : "Cricket Fanatic" ,
      views : "1 Bn" ,
      uploaded : "5 Mins",
},
]

export default function VideoGrid(){
    // Grid section displaying videos
    return (
        <div className="grid grid-cols-4 p-6">
        {VIDEOS.map((video) => { 
            return (
            <div className="p-3">
                <VideoCard 
                    thumbnail={video.thumbnail}
                    channelLogo={video.channelLogo} 
                    title={video.title} 
                    channel={video.channel}
                    views={video.views} 
                    uploaded={video.uploaded} />
            </div>
            )})}
        </div>   
    )
}