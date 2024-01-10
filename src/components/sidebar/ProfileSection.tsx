import { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import IconTextButton from "../IconTextButton";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase_config";
import ProfileChildernComp from "./ProfileChildernComp";

interface profileSecInterface {
    closeDrawer: any;
}
function ProfileSection({ closeDrawer }: profileSecInterface) {
    const context = useContext(AppContext);
    const { user, setIsLogged, isLogged } = context || {};
    const navigate = useNavigate();

    const logoutFromApp = () => {
        signOut(auth)
            .then((_) => {
                setIsLogged(!isLogged);
                navigate("/auth");
            })
            .catch((_) => {
                console.log("Something went wrong");
            });
    };
    return (
        <ProfileChildernComp
            children={
                <IconTextButton
                    text="Logout"
                    onClick={logoutFromApp}
                    icon={<IoMdLogOut />}
                />
            }
            bio={user?.bio}
            name={user?.name}
            email={user?.email}
            closeDrawer={closeDrawer}
            link
            profilePic={user ? user.profilePic : "/avator.jpg"}
        />
    );
}

export default ProfileSection;
