<template>
  <div class="personage">
    <a-button class="editable-add-btn" @click="showModal">新建</a-button>
    <!-- 对话框 -->
    <a-modal v-model="visible">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">取消</a-button>
        <a-button key="submit" @click="handleCreate" type="primary" :loading="loading">创建</a-button>
      </template>

      <a-form
        :label-col="{span:5}"
        :wrapper-col="{span:12}"
        @submit="handleSearch"
        :layout="formLayout"
        :form="form"
      >
        <a-form-item label="标题">
          <a-input v-decorator="['title', { rules: [{ required: true, message: '不为空' }] }]"></a-input>
        </a-form-item>
        <a-form-item label="时间">
          <a-date-picker @change="onTimeChange" />
          <!-- <a-input v-decorator="['time', { rules: [{ required: true, message: '不为空' }] }]"></a-input> -->
        </a-form-item>
        <a-form-item label="类型">
          <a-input v-decorator="['type', { rules: [{ required: true, message: '不为空' }] }]"></a-input>
        </a-form-item>
        <a-form-item label="地址">
          <a-input v-decorator="['src', { rules: [{ required: true, message: '不为空' }] }]"></a-input>
        </a-form-item>
        <a-form-item label="github">
          <a-input v-decorator="['github', { rules: [{ required: true, message: '不为空' }] }]"></a-input>
        </a-form-item>
        <!-- <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>-->
      </a-form>
    </a-modal>
    <a-table :columns="columns" :data-source="data" @change="onChange">
      <template slot="operation">
        <!-- <a-popconfirm
        v-if="dataSource.length"
        title="Sure to delete?"
        @confirm="() => onDelete(record.key)"
        >-->
        <a-button type="primary" shape="round">编辑</a-button>
        <a-divider type="vertical" />
        <a-button type="danger" shape="round">删除</a-button>
        <!-- </a-popconfirm> -->
      </template>
    </a-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 表单布局
      formLayout: 'horizontal',
      // 表单实例
      form: this.$form.createForm(this, { name: 'toolForms' }),
      visible: false,
      loading: false,
      columns: [
        {
          title: 'ID',
          dataIndex: 'id'
        },
        {
          title: '标题',
          dataIndex: 'title'
        },
        {
          title: '时间',
          dataIndex: 'time'
        },
        {
          title: '类型',
          dataIndex: 'type'
        },
        {
          title: '地址',
          dataIndex: 'url',
          ellipsis: true
        },
        {
          title: 'github',
          dataIndex: 'github',
          ellipsis: true
        },
        {
          title: '阅读量',
          dataIndex: 'pageviews'
        },
        {
          title: '操作',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' }
        }
      ],
      data: [
        {
          key: '1',
          title: '图片转换为Base64编码',
          time: '2020.7.27',
          type: '编码',
          url: 'http://tools.jb51.net/transcoding/img2base64',
          github: 'https://github.com/WLL-1017065322',
          pageviews: 0
        },
        {
          key: '2',
          title: '图片转换为Base64编码',
          time: '2020.7.27',
          type: '编码',
          url: 'http://tools.jb51.net/transcoding/img2base64',
          github: 'https://github.com/WLL-1017065322',
          pageviews: 0
        },
        {
          key: '3',
          title: '图片转换为Base64编码',
          time: '2020.7.27',
          type: '编码',
          url: 'http://tools.jb51.net/transcoding/img2base64',
          github: 'https://github.com/WLL-1017065322',
          pageviews: 0
        },
        {
          key: '4',
          title: '图片转换为Base64编码',
          time: '2020.7.27',
          type: '编码',
          url: 'http://tools.jb51.net/transcoding/img2base64',
          github: 'https://github.com/WLL-1017065322',
          pageviews: 0
        },
        {
          key: '5',
          title: '图片转换为Base64编码',
          time: '2020.7.27',
          type: '编码',
          url: 'http://tools.jb51.net/transcoding/img2base64',
          github: 'https://github.com/WLL-1017065322',
          pageviews: 0
        },
        {
          key: '6',
          title: '图片转换为Base64编码',
          time: '2020.7.27',
          type: '编码',
          url: 'http://tools.jb51.net/transcoding/img2base64',
          github: 'https://github.com/WLL-1017065322',
          pageviews: 0
        }
      ]
    }
  },
  methods: {
    onChange(pagination, filters, sorter) {
      console.log('params', pagination, filters, sorter)
    },
    onTimeChange(date, dateString) {
      console.log(date, dateString)
    },
    showModal() {
      console.log('visible', this.visible)
      this.visible = true
    },
    handleCancel() {
      this.visible = false
    },
    handleSearch(e) {
      console.log(e)
    },
    handleCreate(e) {
      const form = this.form
      form.validateFields((err, values) => {
        if (err) {
          return
        }
        form.resetFields()
        this.visible = false
      })
    }
  }
}
</script>
<style lang="less" scoped>
.personage {
  .editable-add-btn {
    margin-bottom: 10px;
  }
}
</style>
