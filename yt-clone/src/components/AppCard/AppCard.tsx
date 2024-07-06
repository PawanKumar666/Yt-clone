import SearchBar from "./SearchBar";
import SignInAppCard from "./SignInAppCard";
import YouTubeIconSection from "./YouTubeIconSection";

export default function AppCard(){
    return (
        <div className="flex justify-between p-5">
            <div>
                <YouTubeIconSection />
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <SignInAppCard />
            </div>
        </div>
    )
}