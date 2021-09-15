import nodemailer from 'nodemailer'
import smtpConfig from '../config/smtp'

export default nodemailer.createTransport(smtpConfig)