import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

export const tabs = [
    {
        label: "Inicio",
        value: "home",
        icon: <HomeIcon/>,
        link: "/"
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
        label: "Descuento",
        value: "discount",
        icon: <LocalActivityIcon/>,
        link: "/discount"
    }
]