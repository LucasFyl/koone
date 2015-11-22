<?php snippet('header') ?>

  <main class="main wallpapers" role="main" id="album">
    <div class="container-fluid">

      <div class="scrollContainer">
          <div id="gallery">
            <figure class='first'>
              <div>
                <h1><?php echo $page->title()->html() ?></h1>
                <!-- <ul class="meta">
                  <li><b>Date:</b> <time datetime="<?php echo $page->date('c') ?>"><?php echo $page->date('Y', 'year') ?></time></li>
                  <li><b>Tags:</b> <?php echo $page->tags() ?></li>
                </ul> -->
                <div class="text">
                  <?php echo $page->text()->kirbytext() ?>
                </div>
              </div>
            </figure>
 
			<?php foreach(page('wallpapers')->children() as $w): ?>
            
            <figure>
				<?php if($image = $w->image('small.jpg')): ?>
      			<img src="<?php echo $image->url() ?>" alt="<?php echo $w->title()->html(); ?>" />
				<?php endif ?>

            	<figcaption class="hover-content">
            		<div class="center-bloc vertial-center">
            			<h3><?php echo $w->title()->html(); ?></h3>
            				<p class="col-xs-12">Download:</p>
                    <p class="col-xs-12">
                      <?php if($imageSmall = $w->image('small.jpg')): ?>
                      <a href="<?php echo $imageSmall->url() ?>" download>
                        <span>Small</span>
                      </a>
                      <?php endif ?>

                      <?php if($imageMedium = $w->image('medium.jpg')): ?>
                      <a href="<?php echo $imageMedium->url() ?>" download>
                        <span>Medium</span>
                      </a>
                      <?php endif ?>
                      
                      <?php if($imageBig = $w->image('big.jpg')): ?>
                      <a href="<?php echo $imageBig->url() ?>" download>
                        <span>Big</span>
                      </a>
                      <?php endif ?>   
                    </p>
            		</div>
            	</figcaption>
            </figure>
            
            <?php endforeach ?>
          
          </div>
      </div>
      
      <div class="sidebar col-sm-3">
        <?php snippet('menu') ?>  
      </div>

    </div>
  </main>


<?php snippet('footer') ?>
<script src="<?php echo url('assets/scripts/vendor/hoverIntent.js'); ?>"></script>
<script src="<?php echo url('assets/scripts/wallpapers.js'); ?>"></script>
