(function($) {
        $("#btn-search").click(function(e){
            $(".validation-advice").hide();
            var searchVal = $.trim($("#search").val());
            if(searchVal == '') {
                $("#search").after('<div class="validation-advice" id="advice-search-required-entry-search"><?php echo $this->__('Eenter preformatted text herenter a search term.') ?></div>').fadeIn();
                e.preventDefault();
            }
        });
        $("#search").click(function() {
            $(this).siblings('.validation-advice')
                .fadeOut(function() {
                    $(this).remove();
                }
            );
        });
    })(jQuery);
    
    
    
    
    
    <script type="text/javascript">
    (function(jquery) {
        jquery(".search-button").click(function(e) {
            jquery(".validation-advice").hide();
            var searchVal = jquery.trim(jquery("#search").val());
            if (searchVal == '') {
                document.getElementById('search').style.borderColor = 'red';
                e.preventDefault();
            }
        });
        jquery("#search").click(function() {
            jquery(this).siblings('#search').fadeOut(function() {
                jquery(this).remove();
            });
        });
    })(jQuery);
    searchForm.initAutocomplete('</?php echo $catalogSearchHelper->getSuggestUrl() ?>', 'search_autocomplete');
</script>