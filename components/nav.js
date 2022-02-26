function navbar(){
    return `
    <header>
    <div id="leftheader">
        <div onclick="options()" id="options">
            <i class="fa-solid fa-bars fa-2x"></i>    
        </div>
        <div id="search">
            <i class="fa-solid fa-magnifying-glass fa-2x"></i>
            <input id="searchbar" type="search">
        </div>
        
    </div>
    <div id="logo">
        <img src="https://www.stpaulcollection.com/wp-content/uploads/2018/11/st-paul-collection-amenities-cb2.png" alt="">
    </div>
    <div id="rightheader">
        <ul>
            <li>
                <div>
                    <i class="fa-solid fa-location-dot fa-2x"></i>
                </div>
            </li>
            <li>
                <div id="user">
                    <i class="fa-solid fa-user fa-2x"></i>
                    <div aria-hidden="true" id="user-div">
                        <div>SIGN IN</div>
                        <div>ORDER TRACKING</div>
                        <div>SCHEDULE DELIVERY</div>
                        <div>CB2 CREDIT CARD</div>
                    </div>
                </div>
            </li>
            <li>
                <div id="whishlist">
                    <i class="fa-solid fa-heart fa-2x"></i>
                    <div aria-hidden="true" id="whishlist-div">
                        <div>SOMETHING CATCHING YOUR EYE?</div>
                        <div>
                            <span style="text-decoration: underline;">Sign in</span> to see items you may have added using another computer or device.
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <i class="fa-solid fa-cart-shopping fa-2x"></i>
                    <span id ="cart-count"></span>
                </div>
            </li>
        </ul>
    </div>
</header>
<div id="sidebox">
    <div onclick="window.location.href=''">NEW</div>
    <div onclick="window.location.href=''">FURNITURE</div>
    <div onclick="window.location.href=''">DECOR & MIRRORS</div>
    <div onclick="window.location.href=''">LIGHTNING</div>
    <div onclick="window.location.href=''">PILLOWS AND THROWS</div>
    <div onclick="window.location.href=''">RUGS</div>
    <div onclick="window.location.href=''">KITCHEN & DINING</div>
    <div onclick="window.location.href=''">BEDDING & BATH</div>
    <div onclick="window.location.href=''">OUTDOOR</div>
    <div onclick="window.location.href=''">GIFTS</div>
    <div onclick="window.location.href=''">SALE & OFFERS</div>
    <div onclick="window.location.href=''">KRAVITZ DESIGN</div>
    <div onclick="window.location.href=''">-</div>
    <div style="color: rgb(138, 135, 135);" onclick="window.location.href=''">COLLABORATIONS</div>
    <div style="color: rgb(138, 135, 135);" onclick="window.location.href=''">IDEAS & INSPIRATION</div>
    <div style="color: rgb(138, 135, 135);" onclick="window.location.href=''">FREE DESIGN SERVICES</div>
    <div style="color: rgb(138, 135, 135);" onclick="window.location.href=''">TRADE PROGRAM</div>
</div>`
}

export default navbar