<?php

/* @var $this yii\web\View */

?>

<title>Home</title> <!-- For Pjax's sake -->
<div class="site-coordinator-console">
    <div class="col-xs-2"> <!-- required for floating -->
        <!-- Nav tabs -->
        <ul class="nav nav-tabs tabs-left">
            <li class="active"><a href="#tab-invite-student" data-toggle="tab">Invite student</a></li>
            <li><a href="#tab-sent-invites" data-toggle="tab">Sent invites</a></li>
        </ul>
    </div>
    <div class="col-xs-9">
        <!-- Tab panes -->
        <div class="tab-content">
            <div class="tab-pane active" id="tab-invite-student">
                <?= $this->render('signupInvites'); ?>
            </div>
            <div class="tab-pane" id="tab-sent-invites">List of sent invites</div>
        </div>
    </div>
</div>
