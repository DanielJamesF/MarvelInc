<template>
<div class="row-hero">
    <video class="video" poster="https://imelgrat.me/demo/images/moth.jpg" autoplay playsinline muted loop>
      <source src="../assets/marveltheme.mp4" type="video/webm">
    </video>
	<div class="video-quote">
<div class="p-5">
    <h1 class="display-3">MARVEL INC.</h1>
    <p class="lead">Your one stop shop for all your hero needs</p>
    <hr class="my-2">
    <p>Browse Our Wares</p>
    <p class="lead">
      <a class="btn btn-danger btn-lg" href="" role="button"><router-link to="/products">Browse</router-link></a>
    </p>
</div>
  </div>
</div>
</template>

<script>

export default {
}
</script>

<style>
html, body {
	margin: 0;
	padding: 0;
	height: 100%;
	font-family: Arial;
}

.row-hero {
	height: 20rem;
	width: 100%;
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: flex-end;
}
	@media(min-width: 480px) {
		.row-hero {
			height: 25rem;
		}
	}
	@media(min-width: 720px) {
		.row-hero {
			height: 35rem;
		}
	}

.video {
	position: absolute;
	top: 50%;
	left: 50%;
	height: 100vh;
	width: 100vw;
	z-index: -1;
	transform: translateX(-50%) translateY(-50%);
	min-width: 100%;
	min-height: 100%;
}

.video-quote {
	z-index: 1;
	padding: .5rem 1rem;
	color: #fff;
	background-color: rgba(0, 0, 0, 0.6);
}
</style>
