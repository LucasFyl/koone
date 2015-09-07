<?php snippet('header') ?>

  <main class="main" role="main" id="about">
    <div class="container">
        <div class="col-xs-12">
            <h1><?php echo $page->title()->html() ?></h1>
        </div>
        <div class="col-md-4 col-xs-12">
            <?php echo $page->textcol1()->kirbytext() ?>
        </div>
        <div class="col-md-4 col-xs-12">
            <?php echo $page->textcol2()->kirbytext() ?>
            <!-- <a href="mailto:contact@koone.de" class="contact"><?php echo $page->contactText()->html() ?></a> -->
        </div>
        <div class="col-md-4 col-xs-12">
            <?php echo $page->textcol3()->kirbytext() ?>
            <a href="mailto:info@koone.de" class="contact"><?php echo $page->contactText()->html() ?></a>
        </div>

        <div class="sidebar col-sm-2">
            <?php snippet('menu') ?>    
        </div>
    </div>

  </main>

<?php snippet('footer') ?>