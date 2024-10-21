import {
    CookieConsent,
    Header,
    ThemePicker,
    Footer,
} from "@daniellaalolo/fwk-23-4-components";

const Landing = () => {
    return (
        <div className="landing">
            <Header />
            <CookieConsent />
            <ThemePicker
                onThemeChange={(themeName) => console.log(themeName)}
            />
            <Footer />
        </div>
    );
};

export default Landing;
