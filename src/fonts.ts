import localFont from "next/font/local";

export const leagueGothic = localFont({
    src: "../public/fonts/league-gothic.regular.ttf",
    weight: "400",
    style: "normal",
    variable: "--font-league-gothic", // optional but useful
});