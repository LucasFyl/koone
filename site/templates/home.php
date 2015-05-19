<?php snippet('header') ?>

  <main class="main" role="main">

	<div class="sidebar">
      	<?php snippet('menu') ?>	
	</div>

    <div class="featured-pics" id="gallery">
    	<?php foreach($page->images() as $image): ?>
	    <figure>
	      <a href="<?php echo $image->url() ?>">
	        <img src="<?php echo $image->url() ?>" alt="">
	      </a>
	    </figure>
	    <?php endforeach ?>
    </div>

  </main>

<?php snippet('footer') ?>