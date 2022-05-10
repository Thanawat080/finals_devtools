<template>
<div class="container">
    <div class="col-12">
        <br />
        <br />
        <center>
            <span style="font-size:45px; color:#FF0000;"><b>ยืนยันการลงทะเบียน</b></span>
        </center>
        <br>
        <center>
            <div style="width:730px; height:350px; border:1px solid #ececec">
                <div class="columns">
                    <div class="column is-2">
                        <label for="">คำนำหน้า</label>
                        <br>
                        <b style="margin-left:-30px;">{{prefix}}</b>

                    </div>
                    <div class="column is-4">
                        <label for="">ชื่อ</label>
                        <br>
                        <b>{{fname}}</b>
                    </div>

                    <div class="column is-3">
                        <label for="">นามสกุล</label>
                        <br>
                        <b>{{lname}}</b>
                    </div>

                </div>
                <div class="columns">
                    <div class="column is-4" style="margin-left:-10px;">
                        <label for=""  style="margin-left:-90px;">ประเภทบัตร</label>
                        <br>
                        <b>{{type_card}}</b>

                    </div>
                    <div class="column is-4">
                        <label for="">เลขบัตร</label>
                        <br>
                        <b>{{card}}</b>
                    </div>
                </div>
                <div class="columns">
                    <div class="column " style="margin-left:-580px;">
                        <label for="">วัน/เดือน/ปีเกิด</label>
                        <br>
                        <b>{{bird_date}}</b>

                    </div>
                </div>
                <div class="columns">
                    <div class="column is-2" >
                        <label for=""  style="margin-left:-30px;">ที่อยู่</label>
                        <br>
                        <b>{{address}}</b>

                    </div>
                </div>
                <div class="columns">
                    <div class="column" style="margin-left:-530px;">
                        <label for="">หมายเลขโทรศัพท์ของคุณ</label>
                        <br>
                        <b  style="margin-left:-85px;">{{phone}}</b>

                    </div>
                </div>
                 <button class="button is-danger">แก้ไข</button>
                <button class="button is-success" style="margin-left:40px;">ยืนยัน</button>

                
            </div>
        </center>
<br><br>
<br><br>
    </div>
</div>
</template>

// 

<script>
import axios from 'axios'

export default {
    data() {
        return {
            day: '',
            mount: '',
            year: '',
            prefix: '',
            fname: '',
            lname: '',
            type_card: '',
            card: '',
            address: '',
            phone: '',
            dis: '',
            dis1: '',
            dis2: '',
            bird_date:'',
        }
    },
    methods: {

    },
    created() {
        axios
            .get('http://localhost:3000/information/' + localStorage.getItem('id'))
            .then((res) => {
                console.log(res.data[0])
                this.prefix = res.data[0].prefix
                this.fname = res.data[0].fname
                this.lname = res.data[0].lname
                this.phone = res.data[0].phone
                this.type_card = res.data[0].type_card
                this.card = res.data[0].card
                this.address = res.data[0].address
                this.bird_date = res.data[0].day + res.data[0].mount + res.data[0].year
            })
            .catch((err) => {
                console.log(err)
            })
    },
}

</script>
