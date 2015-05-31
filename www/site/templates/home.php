<?php snippet('header') ?>

  <main class="main" role="main" id="home">

	
	<div class="container-fluid">
		<div class="scrollContainer">
			<div class="featured-pics" id="gallery">
		    	<?php foreach($page->images() as $image): ?>
			    <figure>
			      <!-- <a href="<?php echo $image->url() ?>"> -->
			        <img src="<?php echo $image->url() ?>" alt="">
			      <!-- </a> -->
			    </figure>
			    <?php endforeach ?>
		    </div>
		</div>

		<div class="sidebar col-sm-2">
	      	<?php snippet('menu') ?>	
		</div>
	</div>
		
  </main>

<?php snippet('footer') ?>