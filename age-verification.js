const showModal = () => {
    const modal = document.createElement('div');
    modal.setAttribute('id', 'age-verification');
    modal.style.zIndex = '1000';
    modal.style.margin = 'auto';
    modal.style.position = 'absolute';
    modal.style.top = 0;
    modal.style.bottom = 0;
    modal.style.left = 0;
    modal.style.right = 0;
    modal.style.backgroundColor = 'rgba(20, 20, 20, 0.9)';
    const modalStyles = `margin: 0 auto; max-width: 95%; width: 400px; background-color: #fff;padding: 14px; text-align: center; margin-top: 20vh; border-radius: 4px;`
    const textStyles = `color: #151515;font-size: 22px; font-weight: 700; font-size: 24px; padding: 16px;`
    const buttonStyles = `color: #151515;background-color: #fff; border: 1px solid #151515; border-radius: 3px; padding: 12px;width: 68px; font-size: 18px; font-weight: 700; letter-spacing: 1.5px; margin: 8px;`
    modal.innerHTML = `
		<div style="${modalStyles}"> 
			<h1 style="${textStyles}">Are you 21?</h1> 
			<button style="${buttonStyles}" id="age-confirm" onMouseOver="this.style.color='#39d52d'" onMouseOut="this.style.color='#151515'">Yes</button> 
			<button style="${buttonStyles}" id="age-deny" onMouseOver="this.style.color='#39d52d'" onMouseOut="this.style.color='#151515'">No</button>
		</div>`
    const anchor = document.getElementsByClassName('hero__inner')[0];
    anchor.appendChild(modal);
}
const redirect = () => {
    window.location = 'https://www.chuckecheese.com/';
}

const confirmOfAge = () => {
  window.localStorage.setItem('is21', 'true');
  document.getElementById('age-verification').style.display = 'none';
}


if (!window.localStorage.getItem('is21')) {
    showModal();
    document.getElementById('age-deny').addEventListener('click', function() { redirect(); });
    document.getElementById('age-confirm').addEventListener('click', function() { confirmOfAge(); });
}
