window.global= {
	lang: ( ()=>{
		if(localStorage.getItem('lang')){
			return localStorage.getItem('lang');
		} else {
			window.localStorage.setItem('lang', 'en');
			return 'en';
		}

	} )()
}
