<?php snippet('header') ?>

  <main class="main" role="main" id="home">

	<div class="sidebar col-sm-2">
      	<?php snippet('menu') ?>	
	</div>
	
	<div class="container-fluid content">
		<div class="scrollContainer">
			<div class="featured-pics" id="gallery">
		    	<?php foreach($page->images()->sortBy('sort', 'asc') as $image): ?>
			    <figure>
			        <img src="<?php echo $image->url(); ?>" alt="<?php echo $image->name(); ?>" />
			    </figure>
			    <?php endforeach ?>
		    </div>
		</div>


	</div>
		
  </main>

<?php snippet('footer') ?>