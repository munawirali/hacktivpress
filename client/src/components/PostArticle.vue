<template lang="html">
  <div class="modal" id="postArticle">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add News</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <fieldset>
              <div class="form-group">
                <label>Category</label>
                <select v-model="frmArticle.category" class="form-control" name="">
                  <option value="umum">Umum</option>
                  <option value="politik">Politik</option>
                  <option value="hukum">Hukum</option>
                  <option value="Olahraga">Olahraga</option>
                </select>
              </div>
              <div class="form-group">
                <label>Title</label>
                <input v-model="frmArticle.title" type="text" class="form-control" placeholder="Enter title">
              </div>
              <div class="form-group">
                <label>Content</label>
                <textarea v-model="frmArticle.content" class="form-control" rows="15" placeholder="write your content"></textarea>
              </div>
              <div class="form-group">
                <label>Image Url</label>
                <input v-model="frmArticle.imageUrl" type="text" class="form-control" placeholder="Image Url">
              </div>
            </fieldset>
            <div class="modal-footer">
              <button @click="submitData(frmArticle)" type="button" class="btn btn-primary" data-dismiss="modal">Add Data</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['frmArticle'],
  methods: {
    submitData (data) {
      this.$emit('emitArticle', data)
    }
  }

}
</script>

<style lang="css">
</style>
