import { BrandMastercard, Cash, CreditCard, History, Home, QuestionMark, Settings, Wallet, } from "tabler-icons-react";

export let navLink = [
    {
        name:"Home",
        to: "/",
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

export const Userdata = [
    {
      id:1,
      year: 2016,
      Usergain: 9000,
      UserLost: 1000,
    },
    {
      id:2,
      year: 2017,
      Usergain: 9000,
      UserLost: 1000,
    },
    {
      id:3,
      year: 2018,
      Usergain: 9000,
      UserLost: 1000,
    },
    {
      id:4,
      year: 2019,
      Usergain: 9000,
      UserLost: 1000,
    }
  ]
