<template>
    <!-- Hover on Image Section Start  -->
    <section data-aos="fade-up" class="early-contributors bg-gray-900 pt-12">
      <div id="contributors_container" class="content">
        
        <div data-aos="slide-up" id="candy" class="row" onclick="window.open('https://playground.pteri.org/wallet','_blank')">
          <h5 class="responsive-text text-white">
            Create Wallet
          </h5>
          <img src="/arrow-up.png" class="w-5 h-5 text-gray-500 transition group-open:rotate-90" alt="">
          <div class="img-fixed-content"></div>
        </div>
        <div data-aos="slide-up" id="candy" class="row" onclick="window.open('https://playground.pteri.org/wallet/Create-Address','_blank')">
          <h5 class="responsive-text text-white">
            Create Address
          </h5>
          <img src="/arrow-up.png" class="w-5 h-5 text-gray-500 transition group-open:rotate-90" alt="">
          <div class="img-fixed-content"></div>
        </div>
        <div data-aos="slide-up" id="consensys" class="row" onclick="window.open('https://playground.pteri.org/wallet/Wallet-Balance','_blank')">
          <h5 class="responsive-text text-white">
            Wallet Balance
          </h5>
          <img src="/arrow-up.png" class="w-5 h-5 text-gray-500 transition group-open:rotate-90" alt="">
          <div class="img-fixed-content"></div>
        </div>
        <div data-aos="slide-up" id="consensys" class="row" onclick="window.open('https://playground.pteri.org/wallet/Wallet-Transactions','_blank')">
          <h5 class="responsive-text text-white">
            Wallet Transaction
          </h5>
          <img src="/arrow-up.png" class="w-5 h-5 text-gray-500 transition group-open:rotate-90" alt="">
          <div class="img-fixed-content"></div>
        </div>
        <div data-aos="slide-up" id="palm_studio" class="row" onclick="window.open('https://playground.pteri.org/wallet/Load-wallet','_blank')">
          <h5 class="responsive-text text-white">
            Load Wallet
          </h5>
          <img src="/arrow-up.png" class="w-5 h-5 text-gray-500 transition group-open:rotate-90" alt="">
          <div class="img-fixed-content"></div>
        </div>
        <div data-aos="slide-up" id="palm_studio" class="row" onclick="window.open('https://playground.pteri.org/transaction/fund-wallet','_blank')">
          <h5 class="responsive-text text-white">
            Fund Wallet
          </h5>
          <img src="/arrow-up.png" class="w-5 h-5 text-gray-500 transition group-open:rotate-90" alt="">
          <div class="img-fixed-content"></div>
        </div>
        <div data-aos="slide-up" id="palm_studio" class="row" onclick="window.open('https://playground.pteri.org/transaction/send-from-wallet','_blank')">
          <h5 class="responsive-text text-white">
            Send from Wallet
          </h5>
          <img src="/arrow-up.png" class="w-5 h-5 text-gray-500 transition group-open:rotate-90" alt="">
          <div class="img-fixed-content"></div>
        </div>
        <div data-aos="slide-up" id="palm_studio" class="row" onclick="window.open('https://playground.pteri.org/transaction/create-transaction','_blank')">
          <h5 class="responsive-text text-white">
            Send Transaction
          </h5>
          <img src="/arrow-up.png" class="w-5 h-5 text-gray-500 transition group-open:rotate-90" alt="">
          <div class="img-fixed-content"></div>
        </div>
         
         
        
      </div>
    </section>
    <!-- Hover on Image Section End  -->
  </template>
  
  <style scoped>
  .content {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
  }
  
  .row {
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 10px;
    background: linear-gradient(135deg, #2a2a2a, #3a3a3a);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
  }
  
  .row:hover {
    transform: translateY(-5px);
  }
  
  h3 {
    margin-bottom: 30px;
  }
  
  .img-fixed-content {
    display: none;
  }
  
  .top-title h3 {
    color: #00ffd9ed; /* Adjusted for visibility on dark background */
  }
  
  /* Responsive font sizes for h5 elements */
  .responsive-text {
    font-size: 40px; /* Default size for desktop */
    line-height: 1.2; /* Line height for desktop */
  }
  
  @media (max-width: 640px) {
    .responsive-text {
      font-size: 20px; /* Smaller size for phones */
      line-height: 1.4; /* Adjusted line height for phones */
    }
  }
  
  @media (min-width: 641px) and (max-width: 1024px) {
    .responsive-text {
      font-size: 35px; /* Adjusted size for tablets */
      line-height: 1.3; /* Adjusted line height for tablets */
    }
  }
   /* Early Contributer  */

   .early-contributors {
	/* background-image: linear-gradient(to right, rgb(15, 23, 42), rgb(88, 28, 135), rgb(15, 23, 42)); */
	color: #171717;
	padding: 60px;
	width: 100%!important;
}

.early-contributors .content {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	overflow: hidden;
	transition: 0.5s;
}

.early-contributors .full {
	height: 1380px!important
}

.early-contributors .expand-button-content {
	width: 100%;
	margin: -100px 0 100px 0;
	display: flex;
	justify-content: center;
}

.early-contributors .expand-button {
	background: transparent;
	border: none;
	background-repeat: no-repeat;
	background-size: cover;
	width: 32px;
	height: 32px;
	transition: 0.5s linear;
}

.early-contributors .close-button {
	background: transparent;
	border: none;
	background-repeat: no-repeat;
	background-size: cover;
	width: 32px;
	height: 32px;
	transition: 0.5s linear;
}

.early-contributors .top-title {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;

}

.early-contributors .top-title h3 {
	font-size: 14px;
	color: #080808;
	font-family: "Poppins";
}

.early-contributors .top-title p {
	font-size: 14px;
	color: #08080857;
	font-family: "Poppins";
}

.early-contributors .row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: flex-start;
	justify-content: space-between;
	border-top: 1px solid #20e8e5;
	padding: 24px 0 20px;
	cursor: pointer;
}





.early-contributors .row h5 {
    font-family: "poppins";
    font-weight: 500;
    letter-spacing: 2.5px;
    margin: 0;
    padding: 15px 0 0 15px;
    padding-bottom: 15px;
}

.early-contributors .row img {
	width: 32px;
  margin:20px;
}

.early-contributors .row:hover .img-fixed-content {
	display: flex;
}

.img-fixed {
	width: calc(100vw / 5)!important;
}

.early-contributors .row .img-fixed-content {
	display: none;
	transition: 0.5s linear;
	position: fixed;
	width: calc(100vw / 5)!important;
	left: calc(50vw - ((100vw / 5)/2));
	top: calc(50vh - ((100vw / 3.5)/2));
	z-index: 10000;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	align-items: center;
}
.early-contributors {
	padding:0px;
    width: calc(100% - 60px);
}

.early-contributors .top-title h3 {
    font-size: 12px;
}

.early-contributors .top-title p {
    font-size: 12px;
}



.early-contributors .row img {
    width: 22px;
}

.early-contributors .row {
    padding: 14px 0 8px;
}

.early-contributors .content {
    height: auto;
}

.early-contributors .full {
    height: 920px!important;
}
  </style>