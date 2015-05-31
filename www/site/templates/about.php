<?php snippet('header') ?>

  <main class="main" role="main">

    <div class="sidebar hidden">
        <?php snippet('menu') ?>
    </div>
    <div id="gallery">
    	<div>
    		<h1><?php echo $page->title()->html() ?></h1>
			<?php echo $page->text()->kirbytext() ?>
    	</div>
    </div>

  </main>

<?php snippet('footer') ?>