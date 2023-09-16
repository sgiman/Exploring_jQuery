/****************************************************************************************
 * 006 - Выбор элементов по классу
 * --------------------------------------------------------------------------------------
 * PhpStorm 2023.1
 * jQuery 3.7
 * HTML, CSS, JavaScript
 * --------------------------------------------------------------------------------------
 * Изучение библиотек jQuery
 * Gosha Dudar (2015)
 * https://www.youtube.com/watch?v=458mWXnWSmA&list=PL0lO_mIqDDFXQk_TTlSO7y7J1l5e-RMgi
 *
 ****************************************************************************************
 * Writing & Modification by sgiman @ 2023-09
 */

//let test = document.getElementById('test')
/*
let  test = $('#test').html()   // ссылка на ID (#)
alert(test)
*/

// --- Maccив классов ---
let  test = $('div.test')   // ссылка на class (.)
for (let i = 0; i < test.length; i++) {
    //test[i].style.color = "red"
    test.get(i).style.color = "red"

    // Styles for "p"
    setTimeout("$('p.test').get(0).style.color = 'blue'", 2000)
    setTimeout("$('p.test').get(0).style.background = 'gold'", 2000)

}