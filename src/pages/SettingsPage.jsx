import {
    DataRequest,
    Sidebar,
    ThemePicker,
} from "@daniellaalolo/fwk-23-4-components";

const SettingsPage = () => {
    return (
        <div className="home flex-row">
            <Sidebar />
            <div className="settings flex-col">
                <DataRequest />
                <ThemePicker
                    onThemeChange={(themeName) => console.log(themeName)}
                />
            </div>
        </div>
    );
};

export default SettingsPage;
