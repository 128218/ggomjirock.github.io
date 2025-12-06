$(document).ready(function(){
    setGridNum();

    $('.add_row_btn').click(function(){
        let clone = $('#gridArea > .grid-box:last-child').clone();
        $('#gridArea').append(clone);
        setGridNum();

    });

    $('.add_col_btn').click(function(){
        $('#gridArea > .grid-box').append('<div></div>');
        setGridNum();

    });

    $('.row-list li').on('contextmenu', function(e) {
        $('#rowAddPop').show();
        rowAddFnc(this);
        e.preventDefault();
    });
});

function setGridNum(){
    $('#gridArea > .grid-box:first-child').addClass('first');

    let colCnt = $('#gridArea > div').length;
    let rowCnt = $('.grid-box.first > div').length;
    let chkColList = $('.row-list > li').length;
    let chkRowList = $('.col-list > li').length;

    for(let i = 0; i < colCnt - chkColList; i++){
        $('.row-list').append('<li></li>');
    };
    for(let i = 0; i < rowCnt - chkRowList; i++){
        $('.col-list').append('<li></li>');
    };
}

function rowAddFnc(i){
    console.log(i);
};