<template>
<div class="container" style="">

    <div class="col-12">
        <br>
        <br>
        <div class="columns">

            <div class="column-3">
                <img src="https://app.dtac.co.th/vaccine/assets/images/logo-nbtc@2x.png" alt="" style="width:60px; height:60px; margin-left:550px;">
            </div>
            <div class="column-3">
                <img src="https://app.dtac.co.th/vaccine/assets/images/logo-moph@2x.png" alt="" style="width:60px; height:60px; margin-left:30px;">
            </div>
            <div class="column-3">
                <img src="https://app.dtac.co.th/vaccine/assets/images/logo-mot@2x.png" alt="" style="width:60px; height:67px; margin-left:30px;">
            </div>

        </div>
        <br>
        <center>
            <span style="font-size:45px; color:#FF0000;"><b>ลงทะเบียนรับสิทธิ์วัคซีน</b></span>
        </center>
        <br>
        <span style="font-size:25px; color:#000000;"> <b>ศูนย์ฉีดวัคซีนกลางบางซื่อ</b> </span>
        <br>
        <img src="https://app.dtac.co.th/vaccine/assets/images/vaccine--4.png" alt="" style="width:20%;">
        <br>
        <br>
        <span style="font-size:35px; color:#FF0000;"> <b>ข้อมูลทั่วไป</b> </span>
        <br>
        <br>
        <div class="columns">
            <div class="column is-3">

                <label for="">คำนำหน้า
                </label>
                <br>
                <div class="select">
                    <select v-model="prefix">
                        <option>โปรเลือกคำนำหน้าชื่อ</option>
                        <option value="นาย">นาย</option>
                        <option value="นาง">นาง</option>
                        <option value="นางสาว">นางสาว</option>
                    </select>
                </div>
            </div>
            <div class="column">

                <label for="">ชื่อ
                </label>
                <br>
                <input class="input" type="text" placeholder="ชื่อภาษาไทย" v-model="fname">
            </div>
            <div class="column">

                <label for="">นามสกุล
                </label>
                <br>
                <input class="input" type="text" placeholder="นามสกุลภาษาไทย" v-model="lname">
            </div>
        </div>

        <div class="columns">
            <div class="column is-3">

                <label for="">บัตรประจำตัว
                </label>
                <br>
                <div class="select">
                    <select v-model="type_card">
                        <option>โปรเลือกประเภทบัตร</option>
                        <option value="บัตรประจำตัวประชาชน">บัตรประจำตัวประชาชน</option>
                        <option value="บัตรชมพู">บัตรชมพู</option>
                        <option value="หนังสือเดินทาง">หนังสือเดินทาง</option>
                    </select>
                </div>
            </div>
            <div class="column">

                <label for="">เลขบัตรประจำตัว
                </label>
                <br>
                <input class="input" type="text" placeholder="หมายเลขบัตรของคุณ" v-model="card">
            </div>
            <div class="column">

                <label for="">วัน/เดือน/ปีเกิด
                </label>
                <br>
                <div class="select" style="width:70px;">
                    <select v-model="day">

                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                </div>
                <div class="select" style="width:100px; margin-left:20px;">
                    <select v-model="mount">
                        <option value="มกราคม">มกราคม</option>
                        <option value="กุมภาพันธ์">กุมภาพันธ์</option>
                        <option value="มีนาคม">มีนาคม</option>
                        <option value="เมษายน">เมษายน</option>
                        <option value="พฤษภาคม">พฤษภาคม</option>
                        <option value="มิถุนายน">มิถุนายน</option>
                        <option value="กรกฎาคม">กรกฎาคม</option>
                        <option value="สิงหาคม">สิงหาคม</option>
                        <option value="กันยายน">กันยายน</option>
                        <option value="ตุลาคม">ตุลาคม</option>
                        <option value="พฤศจิกายน">พฤศจิกายน</option>
                        <option value="ธันวาคม">ธันวาคม</option>
                    </select>
                </div>
                <div class="select" style="width:100px; margin-left:20px;">
                    <select v-model="year">
                        <option value="2466">2466</option>
                        <option value="2467">2467</option>
                        <option value="2468">2468</option>
                        <option value="2469">2469</option>
                        <option value="2470">2470</option>
                        <option value="2471">2471</option>
                        <option value="2472">2472</option>
                        <option value="2473">2473</option>
                        <option value="2474">2474</option>
                    </select>
                </div>
            </div>
        </div>

        <span style="font-size:35px; color:#FF0000;"> <b>ที่อยู่</b> </span>

        <div class="columns">
            <div class="column">

                <label for="">รายละเอียดที่อยู่
                </label>
                <br>
                <input class="input" type="text" placeholder="บ้านเลขที่, ชื่อถนน" v-model="address">
            </div>
            <div class="column">

                <label for="">จังหวัด
                </label>
                <br>
                <input class="input" type="text" placeholder="จังหวัด" v-model="dis">
            </div>
        </div>

        <div class="columns">
            <div class="column">

                <label for="">เขต / อำเภอ
                </label>
                <br>
                <input class="input" type="text" placeholder="เขต / อำเภอ" v-model="dis1">
            </div>
            <div class="column">

                <label for="">แขวง / ตำบล
                </label>
                <br>
                <input class="input" type="text" placeholder="แขวง / ตำบล" v-model="dis2">
            </div>
        </div>

        <div class="columns">
            <div class="column">

                <label for="">หมายเลขโทรศัพท์ของคุณ
                </label>
                <br>
                <input class="input" type="text" placeholder="กรอกหมายเลขโทรศัพท์" style="width:540px;" v-model="phone">
            </div>
        </div>
        <hr style="background-color:black;">

        <div>
            <center>
                <input type="checkbox" name="" id=""> <label for="">ฉันยอมรับ <span style="color:#FF0000; text-decoration: underline;">เงื่อนไขและข้อกำหนดในการใช้งาน</span></label>
            </center>
        </div>
        <br>
        <center>
            <button class="button is-danger" @click="add()">ถัดไป</button>
        </center>
        <br>
    </div>
</div>
</template>

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

        }
    },

    methods: {
        add() {
            if(this.prefix != '' &&  this.fname != ''  &&  this.lname != ''  &&  this.type_card != '' 
             &&  this.card != ''  &&  this.day != ''  &&  this.mount != ''  &&  this.year != ''  
             &&  this.address != ''  &&  this.phone != ''  &&  this.dis != ''  &&  this.dis1 != ''  &&  this.dis2 != ''){
            axios
                .post("http://localhost:3000/information", {
                    prefix: this.prefix,
                    fname: this.fname,
                    lname: this.lname,
                    type_card: this.type_card,
                    card: this.card,
                    day: this.day,
                    mount: this.mount,
                    year: this.year,
                    address: this.address,
                    phone: this.phone,
                    dis: this.dis,
                    dis1: this.dis1,
                    dis2: this.dis2,
                })
                .then((response) => {
                   console.log(response.data)
                   localStorage.setItem("id",response.data._id)
                   this.$router.push({name:'info'})
                })
                .catch((err) => {
                    console.log(err);
                });
             }else{
                 alert("กรอกข้อมูลไม่ครบ")
             }
        }

    },
        created() {
        localStorage.clear()
    },
}

</script>

<style>

</style>
