<?php
class ExamSheetRemoveProcessor extends modObjectRemoveProcessor {

    public $classKey = 'ExamSheet';
    public $objectType = 'object';
    
    public function beforeRemove() {
        if (!$this->modx->user->id) return 'Вам нужно авторизоваться';
        if ($this->object->get('created_by') != $this->modx->user->id)
            return 'Вы не можете удалять чужие записи';
        return true;
    }

}

return 'ExamSheetRemoveProcessor';
