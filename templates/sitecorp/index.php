<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="MobileOptimized" content="320"/>
    <meta name="HandheldFriendly" content="true"/>

    <?php JHTML::_('behavior.modal'); ?>
    <?php /*JHtml::stylesheet('style.css', array(), true); */?>
    <?php
    defined('_JEXEC') or die('Restricted access');
    $doc = &JFactory::getDocument();
    $doc->addStyleSheet(JURI::root(). '/templates/sitecorp/css/style.css', 'text/css');
    $doc->addStyleSheet(JURI::root(). '/templates/sitecorp/css/media.css', 'text/css');
    $doc->addStyleSheet(JURI::root(). '/templates/sitecorp/css/jquery.fancybox.css', 'text/css');
    $doc->addStyleSheet(JURI::root(). '/templates/sitecorp/css/font-awesome.min.css', 'text/css');
    $doc->addStyleSheet(JURI::root(). '/templates/sitecorp/slick-1.6.0/slick/slick.css', 'text/css');
    $doc->addStyleSheet(JURI::root(). '/templates/sitecorp/slick-1.6.0/slick/slick-theme.css', 'text/css');
    $doc->addStyleSheet( 'https://fonts.googleapis.com/css?family=Days+One|Open+Sans:300i,400,700' );
    $doc->addScript(JURI::root(). '/templates/sitecorp/js/jquery-1.11.3.min.js', "text/javascript");
    $doc->addScript ('https://code.jquery.com/jquery-migrate-1.3.0.min.js', "text/javascript");
    $doc->addScript(JURI::root(). '/templates/sitecorp/js/jquery.fancybox.js', "text/javascript");
    $doc->addScript(JURI::root(). '/templates/sitecorp/slick-1.6.0/slick/slick.min.js', "text/javascript");
    $doc->addScript(JURI::root(). '/templates/sitecorp/js/main.js', "text/javascript");
    ?>
    <jdoc:include type="head" />
</head>
<body>
    <div id="head">
        <div class="transparency">
            <div class="header">
                <div class="header-top">
                    <jdoc:include type="modules" name="logo" style="xhtml" />
                    <jdoc:include type="modules" name="media_menu" style="xhtml" />
                    <jdoc:include type="modules" name="menu" style="xhtml" />
                    <jdoc:include type="modules" name="tel" style="xhtml" />
                </div>
            </div>
            <div class="header-content">
                <jdoc:include type="modules" name="header-content" style="xhtml" />
            </div>
        </div>
    </div>
    <div class="content">
        <jdoc:include type="modules" name="why_we" style="xhtml" />
        <jdoc:include type="modules" name="brands" style="xhtml" />
        <jdoc:include type="modules" name="can_able" style="xhtml" />
        <jdoc:include type="modules" name="problems" style="xhtml" />
        <jdoc:include type="modules" name="reviews" style="xhtml" />
    </div>
    <div id="footer">
        <jdoc:include type="modules" name="contacts" style="xhtml" />
    </div>

<!--    <a class="send-call fancybox" href="#xxx">xxx</a>
    <div id="xxx">ffffffffffff</div>-->
</body>
</html>

