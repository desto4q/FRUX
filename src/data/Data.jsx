import { BrandMastercard, Cash, CreditCard, History, Home, QuestionMark, Settings, Wallet, } from "tabler-icons-react";

export let navLink = [
    {
        name:"Home",
        to: "/dashboard",
        Icon: Home,
    },
    {
        name:"Transactions",
        to: "/transactions",
        Icon: History,
    },
    {
        name:"Card",
        to: "/card",
        Icon: BrandMastercard,
    },
    {
        name:"payment",
        to: "/payment",
        Icon: CreditCard,
    },
    {
        name:"get help",
        to: "/help",
        Icon: QuestionMark,
    }
]


