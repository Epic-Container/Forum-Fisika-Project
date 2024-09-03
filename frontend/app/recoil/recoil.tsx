"use client"
import { RecoilRoot } from "recoil";

const RecoilRoots = ({ children }: { children: React.ReactNode }) => {
    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    );
};
export default RecoilRoots;