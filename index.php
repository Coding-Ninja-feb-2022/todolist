<html>
<head>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="style.css">

</head>
<body>

<div class='container'>

<div class="input-icons">
<i class="fa fa-file icon"></i>
<input type='text' placeholder='Type your todo list' id='taskn' oninput="dsubmit()" name='' class='finput input-field'>
<i  onclick="addv()" id='addv' class="fa fa-plus-circle icon submit-b d-none"></i>
</div>

<div class='row'>
<div class='align-left grey pointer' onclick='cat()' >
<i class="fa fa-check icon" style="min-width: 0px;padding: 0px;"></i> Complete all tasks
</div>
<div class='align-right grey pointer' onclick='cc()'>
Clear completed
</div>
</div>
<div class='hr'></div>

<p id="task2"></p>

<div class='hr'></div>
<div class='row'>
<div class='align-left grey'>
<span id='tlength'>0</span> Task Left
</div>
<div class='align-right'>
<bold id="al" onclick="taskv()" class="pointer">All</bold> &nbsp;&nbsp;&nbsp;
<bold id="uc"  onclick="tasku()"  class="grey pointer">Uncomplete</bold> &nbsp;&nbsp;&nbsp;
<bold id="comp"  onclick="taskc()"  class="grey pointer">Completed</bold> &nbsp;&nbsp;&nbsp;
</div>
</div>
<div class='hr'></div>

</div>
</body>

<input type='hidden' value='' id='all'>
<input type='hidden' value='' id='complete'>
<input type='hidden' value='' id='uncomplete'>

<script src="my.js"></script>


</html>