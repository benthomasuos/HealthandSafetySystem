
var db = new PouchDB('http://143.167.48.53:5984/puwer')
db.info().then(function (info) {
  console.log(info);
})



$(document).ready(function(){

        var questions = []
        var row = {}

        $("tr.question").each(function(){
            var textarea = $("<div contenteditable></div>")
            var select = $("<select></select>")
            select.append( $("<option value='none' disabled selected>Select answer</option>") )
            select.append( $("<option value='Yes'>Yes</option>") )
            select.append( $("<option value='No'>No</option>") )
            select.append( $("<option value='NA'>Not Applicable</option>") )
            $(this).find("td:nth-last-of-type(2)").append(select)
            $(this).find("td:last").append(textarea)
        })

        $("tr.reason").each(function(){
            var textarea = $("<div contenteditable></div>")
            $(this).find("td:last").append(textarea)
        })


        loadAssessment()



})


function saveAssessment(){
    var assessment = {}


    $("tr.reason").each(function(d, i){
        console.log($(this))
        var name = $(this).find('input[type="checkbox"]').attr('name')
        var checked = $(this).find('input[type="checkbox"]').prop('checked')
        var comment = $(this).find('div').html()
        assessment.reasons = []
        reason = {}
        reason.name = name
        reason.checked = checked
        reason.comment = comment
        assessment.questions.push(question)


    })

    console.log(assessment.questions)

    $("tr.question").each(function(d, i){
        console.log($(this))
        var id = $(this).find('th').html()
        var answer = $(this).find('select').val()
        var comment = $(this).find('div').html()
        assessment[id] = {}
        assessment[id].id = id
        assessment[id].answer = answer
        assessment[id].comment = comment


    })

    $("input[type='text']").each(function(d, i){
        console.log($(this).attr('name'))
        assessment[$(this).attr('name')] = $(this).val()

    })


    window.localStorage.assessment = JSON.stringify(assessment)



}


function loadAssessment(){
    var assessment = window.localStorage.getItem["assessment"]


    $("tr.reason").each(function(d, i){
        console.log($(this))

        assessment.each(function(d, i){
            $(this).find('input[type="checkbox"]').prop('checked', d.checked )
            $(this).find('div').html(d.comment)
        })




    })


    $("tr.question").each(function(d, i){
        console.log($(this))
        var id = $(this).find('th').html()
        var answer = $(this).find('select').val()
        var comment = $(this).find('div').html()
        assessment[id] = {}
        assessment[id].id = id
        assessment[id].answer = answer
        assessment[id].comment = comment


    })

    $("input[type='text']").each(function(d, i){
        console.log($(this).attr('name'))
        assessment[$(this).attr('name')] = $(this).val()

    })

}
