import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import UpgradePlan from './UpgradePlan';

export default function ProSidebar() {
    const location = useLocation()
    const isActive = (path) => location.pathname === path;
    return (
        <Sidebar 
            className='sidebar' 
            style={{position: 'sticky', width: '100%', height: '100%', top: 0, left: 0}}
            backgroundColor='none'
        >
            <div className='sidebar-content'>
                <Logo />
                <Menu
                    menuItemStyles={{
                    button: {
                        [`&.active`]: {
                        color: '#FB8303',
                        },
                    },
                    }}
                    style={{padding: '0em 1.75em'}}
                >
                    <MenuItem icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill={isActive('/') ? "#F18716" : "none"} xmlns="http://www.w3.org/2000/svg">
                            <g id="Iconly/Light-outline/Home">
                            <g id="Home">
                            <path id="Home_2" fill-rule="evenodd" clip-rule="evenodd" d="M20.3394 7.65948C21.0094 8.17848 21.4204 8.94948 21.4904 9.78848L21.5004 9.98948V18.0985C21.5004 20.1885 19.8494 21.8885 17.7804 21.9985H15.7904C14.8394 21.9795 14.0704 21.2395 14.0004 20.3095L13.9904 20.1685V17.3095C13.9904 16.9985 13.7594 16.7395 13.4504 16.6885L13.3604 16.6785H10.6894C10.3704 16.6885 10.1104 16.9185 10.0704 17.2185L10.0604 17.3095V20.1595C10.0604 20.2185 10.0494 20.2885 10.0404 20.3385L10.0304 20.3595L10.0194 20.4285C9.90037 21.2795 9.20037 21.9285 8.33037 21.9895L8.20037 21.9985H6.41037C4.32037 21.9985 2.61037 20.3595 2.50037 18.2985V9.98948C2.50937 9.13848 2.88037 8.34848 3.50037 7.79848L9.73037 2.78848C11.0004 1.77948 12.7804 1.73948 14.0894 2.66848L14.2504 2.78848L20.3394 7.65948ZM20.0994 18.2585L20.1104 18.0985V9.99848C20.0994 9.56948 19.9204 9.16848 19.6104 8.86948L19.4804 8.75848L13.3804 3.87848C12.6204 3.26848 11.5404 3.23948 10.7404 3.76848L10.5894 3.87848L4.50937 8.77948C4.16037 9.03848 3.95037 9.42848 3.90037 9.83848L3.88937 9.99848V18.0985C3.88937 19.4285 4.92937 20.5185 6.25037 20.5985H8.20037C8.42037 20.5985 8.61037 20.4495 8.63937 20.2395L8.66037 20.0595L8.67037 20.0085V17.3095C8.67037 16.2395 9.49037 15.3695 10.5404 15.2885H13.3604C14.4294 15.2885 15.2994 16.1095 15.3804 17.1595V20.1685C15.3804 20.3785 15.5304 20.5595 15.7304 20.5985H17.5894C18.9294 20.5985 20.0194 19.5695 20.0994 18.2585Z" fill={isActive('/') ? "#F18716" : "#251515"}/>
                            </g>
                            </g>
                        </svg>
                    } 
                        component={<Link to="/" />}
                        className={`sidebar-link ${isActive('/') ? 'active': ''}`}
                    >
                        Home
                    </MenuItem>
                    <MenuItem component={<Link to="/grades" />} 
                    className={`sidebar-link ${isActive('/grades') ? 'active': ''}`}
                    icon={
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.01348 0H2.97574C1.33089 0 0 1.34244 0 2.99552V6.05963C0 7.71203 1.33117 9.05515 2.97574 9.05515H6.01348C7.65805 9.05515 8.98922 7.71203 8.98922 6.05963V2.99552C8.98922 1.34244 7.65833 0 6.01348 0ZM2.97574 1.39535H6.01348C6.88499 1.39535 7.59387 2.11039 7.59387 2.99552V6.05963C7.59387 6.94418 6.88461 7.6598 6.01348 7.6598H2.97574C2.10461 7.6598 1.39535 6.94418 1.39535 6.05963V2.99552C1.39535 2.11039 2.10423 1.39535 2.97574 1.39535ZM17.0252 0H13.9865C12.3417 0 11.0108 1.34244 11.0108 2.99552V6.05963C11.0108 7.71203 12.342 9.05515 13.9865 9.05515H17.0252C18.669 9.05515 20 7.71184 20 6.05963V2.99552C20 1.34264 18.6693 0 17.0252 0ZM13.9865 1.39535H17.0252C17.8959 1.39535 18.6047 2.11049 18.6047 2.99552V6.05963C18.6047 6.94407 17.8955 7.6598 17.0252 7.6598H13.9865C13.1154 7.6598 12.4061 6.94418 12.4061 6.05963V2.99552C12.4061 2.11039 13.115 1.39535 13.9865 1.39535ZM2.97574 10.9449H6.01348C7.65852 10.9449 8.98922 12.2875 8.98922 13.9413V17.0045C8.98922 18.6576 7.65833 20 6.01348 20H2.97574C1.33089 20 0 18.6576 0 17.0045V13.9413C0 12.2875 1.3307 10.9449 2.97574 10.9449ZM6.01348 12.3402H2.97574C2.10413 12.3402 1.39535 13.0553 1.39535 13.9413V17.0045C1.39535 17.8896 2.10423 18.6047 2.97574 18.6047H6.01348C6.88499 18.6047 7.59387 17.8896 7.59387 17.0045V13.9413C7.59387 13.0553 6.88509 12.3402 6.01348 12.3402ZM17.0252 10.9449H13.9865C12.3415 10.9449 11.0108 12.2875 11.0108 13.9413V17.0045C11.0108 18.6576 12.3417 20 13.9865 20H17.0252C18.6693 20 20 18.6574 20 17.0045V13.9413C20 12.2877 18.6695 10.9449 17.0252 10.9449ZM13.9865 12.3402H17.0252C17.896 12.3402 18.6047 13.0554 18.6047 13.9413V17.0045C18.6047 17.8895 17.8959 18.6047 17.0252 18.6047H13.9865C13.115 18.6047 12.4061 17.8896 12.4061 17.0045V13.9413C12.4061 13.0553 13.1149 12.3402 13.9865 12.3402Z" fill={isActive('/grades') ? "#F18716" : "#251515"}/>
                        </svg>
                    }
                    >
                        My grades
                    </MenuItem>
                    <MenuItem component={<Link to="/schedule" />} 
                    className={`sidebar-link ${isActive('/schedule') ? 'active': ''}`}
                    icon={
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.38459 0H5.4528C1.72991 0 0 2.17544 0 6.22847V13.7715C0 17.6361 2.36352 20 6.22905 20H13.7533C17.6114 20 19.9735 17.6347 19.9735 13.7715L20 8.97058C20 4.92273 18.3106 2.94127 14.5296 2.94127H11.7951C11.3298 2.94034 10.8906 2.72042 10.6098 2.34714L9.72808 1.17286C9.17526 0.434786 8.30684 0 7.38459 0ZM5.4528 1.45147H7.38459C7.85058 1.45147 8.28937 1.67116 8.56896 2.04444L9.45158 3.21988C10.0059 3.95693 10.8727 4.3909 11.7936 4.39273L14.5296 4.39274C17.4547 4.39274 18.5505 5.67793 18.5505 8.96658L18.524 13.7675C18.524 16.8331 16.8109 18.5485 13.7533 18.5485H6.22905C3.1637 18.5485 1.44955 16.8341 1.44955 13.7715V6.22847C1.44955 2.91372 2.61233 1.45147 5.4528 1.45147ZM15.3425 12.5438C15.3425 12.143 15.0181 11.8181 14.6178 11.8181H5.34695L5.24861 11.8247C4.89484 11.8727 4.62218 12.1764 4.62218 12.5438C4.62218 12.9446 4.94667 13.2695 5.34695 13.2695H14.6178L14.7161 13.2629C15.0699 13.2149 15.3425 12.9112 15.3425 12.5438Z" fill={isActive('/schedule') ? "#F18716" : "#251515"}/>
                        </svg>
                    }>
                        Schedule
                    </MenuItem>
                    <MenuItem component={<Link to="/messages" />} 
                        className={`sidebar-link ${isActive('/messages') ? 'active': ''}`}
                        icon={
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.058 0.000325575C6.54635 -0.0137865 3.28554 1.80709 1.46059 4.80019C-0.364589 7.79367 -0.487117 11.5227 1.13765 14.6292L1.32147 14.9876C1.39175 15.1193 1.40531 15.2614 1.36458 15.3927C1.10204 16.0866 0.871363 16.8358 0.687298 17.597L0.667756 17.761C0.667756 18.5264 1.07616 19.0523 1.88671 19.0344L2.02167 19.0181C2.75798 18.8555 3.4831 18.646 4.19261 18.391C4.28665 18.3672 4.4407 18.3764 4.57971 18.4333L5.26224 18.8195C5.26378 18.8243 5.26493 18.8279 5.27208 18.832L5.31788 18.8481C8.99294 20.7804 13.4812 20.2474 16.5997 17.508C19.7187 14.7682 20.8199 10.3902 19.3675 6.50396C17.9153 2.61811 14.2115 0.0308507 10.058 0.000325575ZM9.76749 1.39911L10.0484 1.39471C13.6231 1.4219 16.8109 3.6487 18.0605 6.99243C19.31 10.3358 18.3626 14.1022 15.6788 16.4597L15.4587 16.6467C12.8626 18.7781 9.25821 19.2077 6.23269 17.7469L5.94496 17.6027L5.95729 17.6043L5.93909 17.5993L5.51677 17.357C5.36471 17.271 5.24408 17.206 5.14685 17.1591C4.6837 16.9682 4.21354 16.94 3.77133 17.0618L3.35272 17.2056C3.07605 17.297 2.80372 17.3795 2.53273 17.4542L2.13767 17.5574L2.04356 17.925C2.21419 17.2193 2.42804 16.5247 2.68389 15.8452C2.84853 15.3184 2.79818 14.7906 2.55755 14.3403L2.37662 13.9874C0.976269 11.31 1.08168 8.10199 2.65196 5.52657C4.17338 3.03129 6.85494 1.48244 9.76749 1.39911ZM4.4746 10.0003C4.4746 9.37008 4.98586 8.85966 5.61596 8.85966C6.24606 8.85966 6.75732 9.37008 6.75732 10.0003C6.75732 10.6305 6.24606 11.1409 5.61596 11.1409C4.98586 11.1409 4.4746 10.6305 4.4746 10.0003ZM8.91148 10.0003C8.91148 9.37008 9.42274 8.85966 10.0528 8.85966C10.6829 8.85966 11.1942 9.37008 11.1942 10.0003C11.1942 10.6305 10.6829 11.1409 10.0528 11.1409C9.42274 11.1409 8.91148 10.6305 8.91148 10.0003ZM14.4897 8.85966C13.8596 8.85966 13.3484 9.37008 13.3484 10.0003C13.3484 10.6305 13.8596 11.1409 14.4897 11.1409C15.1198 11.1409 15.6311 10.6305 15.6311 10.0003C15.6311 9.37008 15.1198 8.85966 14.4897 8.85966Z" fill={isActive('/messages') ? "#F18716" : "#251515"}/>
                        </svg>}
                    >
                        Messages
                    </MenuItem>
                    <MenuItem component={<Link to="/settings" />}
                    className={`sidebar-link ${isActive('/settings') ? 'active': ''}`}
                    icon={
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6161 0H9.38106C8.6855 0 8.01861 0.27155 7.52796 0.754574C7.09307 1.1827 6.82704 1.74716 6.77575 2.34781L6.76724 2.54181C6.75775 3.17352 6.24742 3.66634 5.62101 3.66628C5.47895 3.6648 5.33141 3.63238 5.19559 3.5713L5.06235 3.50171C3.83155 2.81017 2.23128 3.23376 1.50918 4.46166L0.859895 5.50695C0.169493 6.68048 0.510007 8.15476 1.62449 8.91408L1.77948 9.01151C2.16149 9.22838 2.37987 9.59896 2.37987 10C2.37987 10.3688 2.19491 10.7137 1.88645 10.9228L1.78115 10.9875C0.626514 11.6412 0.171573 13.0841 0.751966 14.2844L0.83679 14.4442L1.47412 15.5224C1.80539 16.1083 2.37306 16.5497 3.04445 16.7366C3.63953 16.9023 4.2746 16.8565 4.83762 16.6084L5.01565 16.5213C5.31529 16.3516 5.62484 16.3109 5.91538 16.3871C6.20591 16.4633 6.45336 16.65 6.6027 16.9057C6.68504 17.0418 6.73337 17.1822 6.75063 17.3277L6.75912 17.4753C6.75765 18.8493 7.93219 20 9.38106 20H10.6164C11.9845 20 13.12 18.9703 13.231 17.6414L13.2391 17.4698C13.2383 17.1379 13.3582 16.8524 13.5727 16.6422C13.7872 16.432 14.0786 16.3146 14.382 16.316C14.5214 16.3199 14.6746 16.3541 14.8166 16.4163L14.9527 16.485C16.1011 17.1344 17.6058 16.8008 18.3808 15.7089L18.4803 15.557L19.1399 14.4804C19.495 13.8833 19.5912 13.1817 19.4119 12.523C19.253 11.9391 18.8887 11.4297 18.3843 11.0841L18.2174 10.9793C17.9272 10.8149 17.736 10.5708 17.658 10.2844C17.58 9.99795 17.6218 9.69291 17.7742 9.43678C17.8585 9.29258 17.9706 9.17256 18.1051 9.08068L18.3624 8.92228C19.4043 8.22927 19.7945 6.86519 19.2461 5.71842L19.1892 5.60674C19.1769 5.57762 19.1627 5.54922 19.1465 5.52174L18.5333 4.47928C17.8511 3.31918 16.3759 2.86897 15.146 3.4355L14.9821 3.51839C14.6882 3.68688 14.3779 3.72947 14.0857 3.65514C13.7935 3.58081 13.5435 3.39567 13.3908 3.14054C13.3124 3.01116 13.2641 2.87079 13.2468 2.72535L13.2383 2.57766C13.2599 1.94968 12.9925 1.27681 12.4983 0.778711C12.0041 0.280614 11.3251 -0.000285457 10.6161 0ZM9.38106 1.44774H10.6164C10.9264 1.44761 11.2229 1.57029 11.4387 1.78783C11.6546 2.00537 11.7713 2.29923 11.7624 2.60249L11.7756 2.85454C11.8203 3.23984 11.9357 3.57504 12.1181 3.87616C12.4673 4.45965 13.0423 4.88546 13.7143 5.05641C14.3863 5.22736 15.1001 5.12941 15.6983 4.78415L15.8015 4.73265L15.9125 4.6891C16.4009 4.52853 16.9764 4.73175 17.253 5.20208L17.8378 6.19726L17.8505 6.22529L17.9212 6.35884C18.1578 6.85504 17.9601 7.4827 17.448 7.77613L17.2873 7.87532C16.9464 8.10733 16.6849 8.38716 16.4946 8.71262C16.1471 9.29707 16.0509 9.99866 16.2302 10.6574C16.3932 11.2563 16.7716 11.7748 17.2922 12.1195L17.5645 12.2882C17.7566 12.4207 17.915 12.6422 17.9841 12.896C18.0621 13.1824 18.0203 13.4875 17.868 13.7436L17.2236 14.7957L17.1511 14.9067C16.8529 15.3258 16.2647 15.4814 15.7687 15.2682L15.4528 15.11C15.1004 14.9547 14.7556 14.8778 14.4053 14.8686C13.6914 14.865 13.0212 15.1351 12.5279 15.6185C12.0345 16.1019 11.7588 16.7585 11.7621 17.4421L11.7565 17.5511C11.7099 18.1023 11.2137 18.5523 10.6164 18.5523H9.38106C8.79047 18.5523 8.30426 18.1145 8.24205 17.552L8.2219 17.1985C8.17721 16.8132 8.06179 16.478 7.87937 16.1768C7.54028 15.5959 6.96861 15.1645 6.29737 14.9886C5.62614 14.8126 4.91096 14.9066 4.3108 15.2497L4.20208 15.3018C3.98569 15.3964 3.70831 15.4164 3.44842 15.344C3.1552 15.2624 2.90728 15.0696 2.75952 14.8084L2.13027 13.7449L2.07398 13.6383C1.83562 13.144 2.03354 12.5163 2.54639 12.2256L2.70219 12.1296C3.43413 11.634 3.85754 10.8446 3.85754 10C3.85754 9.14295 3.42197 8.34666 2.70395 7.871L2.44324 7.70925C1.98256 7.39466 1.83377 6.75044 2.13128 6.24455L2.78057 5.19925C3.1049 4.64815 3.8038 4.46315 4.3519 4.77085L4.54427 4.87026C4.90355 5.03293 5.25588 5.11034 5.61326 5.11398C6.99969 5.11416 8.13339 4.07087 8.23685 2.7415L8.25028 2.43661C8.27058 2.20741 8.38625 1.96196 8.57533 1.77582C8.78866 1.56581 9.07863 1.44774 9.38106 1.44774ZM10.0032 6.73181C8.16095 6.73181 6.66748 8.19503 6.66748 9.99999C6.66748 11.805 8.16095 13.2682 10.0032 13.2682C11.8455 13.2682 13.339 11.805 13.339 9.99999C13.339 8.19503 11.8455 6.73181 10.0032 6.73181ZM10.0032 8.17955C11.0294 8.17955 11.8613 8.99459 11.8613 9.99999C11.8613 11.0054 11.0294 11.8204 10.0032 11.8204C8.97705 11.8204 8.14516 11.0054 8.14516 9.99999C8.14516 8.99459 8.97705 8.17955 10.0032 8.17955Z" fill={isActive('/settings') ? "#F18716" : "#251515"}/>
                        </svg>
                    }
                    >
                        Settings
                    </MenuItem>
                </Menu>
                <UpgradePlan />
            </div>
        </Sidebar>
    )
}