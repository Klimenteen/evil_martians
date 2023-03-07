import { ReactNode } from "react";
import Socials from "../components/socials/Socials";

const FloatingFormLayout = ({ children }: { children?: ReactNode }) => {
    return (
        <>
            <div className="login-layout">{children}</div>
            {window.innerWidth > 768 ? (
                <Socials layout="vertical" />
            ) : (
                <Socials layout="horizontal" />
            )}
        </>
    );
};

export default FloatingFormLayout;
