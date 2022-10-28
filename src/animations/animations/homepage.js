const reachedTheTop = () => {
   const heroText = document.getElementById('homePageHeroText');
   heroText?.classList.remove('heroTextSmall');
   heroText?.classList.add('heroTextToLarge');
   document.getElementById('subHeroText')?.classList.add('fadeIn');
   document.getElementById('subHeroText')?.classList.remove('fadeOut');
};
const leftTheTop = () => {
   const heroText = document.getElementById('homePageHeroText')
   heroText?.classList.add('heroTextSmall');
   heroText?.classList.remove('heroTextToLarge');
   document.getElementById('subHeroText')?.classList.remove('fadeIn');
   document.getElementById('subHeroText')?.classList.add('fadeOut');
}

export {reachedTheTop, leftTheTop};