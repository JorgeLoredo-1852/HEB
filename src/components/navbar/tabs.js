import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';

export const tabs = [
    {
        label: "Inicio",
        value: "home",
        icon: <HomeIcon/>,
        link: "/home"
    },
    {
        label: "Buscar",
        value: "search",
        icon: <SearchIcon/>,
        link: "/search"
    }, 
    {
        label: "Premios",
        value: "prizes",
        icon: <EmojiEventsIcon/>,
        link: "/prizes"
    },
    {
        label: "Perfil",
        value: "profile",
        icon: <PersonIcon/>,
        link: "/profile"
    }
]