function navbar()
{
   return `<nav class="bottom-nav">
   <div class="bottom-nav__item bottom-nav__item--active">
   <a href="../HTML/Home.html">
     <div class="bottom-nav__item-content">
       <img src="../img/clarity_home-solid.png" alt="" />
       <p class="act">Home</p>
     </div></a>
   </div>
   <div class="bottom-nav__item">
     <a href="../HTML/YourNutrition.html"
       ><div class="bottom-nav__item-content">
         <img src="../img/message.png" alt="" />
         <p>Your Nutrionist</p>
       </div></a>
   </div>
   <div class="bottom-nav__item">
     <a href="../HTML/Account.html">
       <div  class="bottom-nav__item-content">
         <img src="../img/account.png" alt="" />
         <p >Account</p>
       </div>
     </a>
   </div>
 </nav>`
}

export default navbar