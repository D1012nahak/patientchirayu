import { Formik } from "formik";
import React from "react";
import { Alert, Text } from "react-native";
import * as Yup from "yup";
import { AppTextInput } from "../../../components/form/AppTextInput";
import { FormGroup } from "../../../components/form/FormGroup";
import { styles } from "../styles/Styles";
const ProfileSchema = Yup.object().shape({
	mobile_no: Yup.string()
		.required("Required")
		.matches(/^[0-9]+$/, "Must be only digits")
		.min(10, "Must be exactly 10 digits")
		.max(10, "Must be exactly 10 digits"),
	email_id: Yup.string().email("Invalid email").required("Required"),
});

export const GeneralDetails = (props) => {
	return (
		<Formik
			initialValues={{ name: "", email_id: "", mobile_no: "" }}
			validationSchema={ProfileSchema}
			validateOnChange={false}
			validateOnBlur={false}
			onSubmit={(values) => Alert.alert("Hi", JSON.stringify(values))}
		>
			{({
				handleChange,
				handleBlur,
				handleSubmit,
				values,
				errors,
				touched,
			}) => (
				<>
					<FormGroup>
						<AppTextInput
							style={styles.textInput}
							placeholder="Name"
							onChangeText={handleChange("name")}
							onBlur={handleBlur("name")}
							value={values.name}
						/>

						{errors.name && touched.name ? (
							<Text style={styles.error}>{errors.name}</Text>
						) : null}
					</FormGroup>
					<FormGroup>
						<AppTextInput
							style={styles.textInput}
							placeholder="Email Id"
							onChangeText={handleChange("email_id")}
							onBlur={handleBlur("email_id")}
							value={values.email_id}
						/>

						{errors.email_id && touched.email_id ? (
							<Text style={styles.error}>{errors.email_id}</Text>
						) : null}
					</FormGroup>
					<FormGroup>
						<AppTextInput
							style={styles.textInput}
							placeholder="Mobile No"
							onChangeText={handleChange("mobile_no")}
							onBlur={handleBlur("mobile_no")}
							value={values.mobile_no}
						/>

						{errors.mobile_no && touched.mobile_no ? (
							<Text style={styles.error}>{errors.mobile_no}</Text>
						) : null}
					</FormGroup>
				</>
			)}
		</Formik>
	);
};
