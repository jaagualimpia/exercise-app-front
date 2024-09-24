"use client"
import { IconComponent } from "./IconComponents/iconComponent";


export const CollapsedNavBar = () => {
    return (
        <>
            <div className="h-[100vh] w-20 bg-[#141414] absolute">
                <div className="h-5"></div>
                <IconComponent redirect="/" iconName="home"/>
                <IconComponent redirect="/registry" iconName="app_registration"/>
            </div>
        </>
    )
}