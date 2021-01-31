# jspsych-vislexdec
Visual [Lexical Decision](https://en.wikipedia.org/wiki/Lexical_decision_task) Experiment (template)

# Generic documentation
Please read the [generic documentation](https://github.com/UiL-OTS-labs/jspsych-uil-template-docs) for some context and scope.

# Task Description

## Short description
The participant first sees a fixation cross, then a word or a non word is presented. Participants are instructed to respond as quickly as possible to make the decision wether the string is a word or not, using the keyboard.

- The _'test stimulus'_ (called 'word') is a string of letters and can be a real word or a nonword.

The reaction time, response and correctness of the response are usually the important variables for analysis. By default, the data of all sub trial phases are logged in the data, but the output data can quite easily be filtered after data collection.

# Output

The data of _all_ (sub) _trial phases_ are logged in the data, but the output data can be filtered after data collection in many ways.
Please read the [general primer on jsPsych's data](https://github.com/UiL-OTS-labs/jspsych-output) if you are new to jsPsych data output.

Essential output for the _'true experimental'_ purpose in this template are:

- Reaction Time (RT) of the keyboard response in the decision phase
- Correctness of the keyboard response in the decision phase

The crucial trial/sub-trial phase (decision phase) output may look similar to this:

```json
	{
		"rt": 700.0000000000073,
		"stimulus": "<p class='stimulus'>thwurp</p>",
		"key_press": 65,
		"condition": "NON_WORD",
		"word": "thwurp",
		"id": 3,
		"trial_phase": "present_word",
		"useful_data_flag": true,
		"correct_response": 0,
		"trial_type": "html-keyboard-response",
		"trial_index": 27,
		"time_elapsed": 45062,
		"internal_node_id": "0.0-11.0-1.4",
		"subject": "8oo722dq",
		"list": "my_one_and_only_list",
		"correct": false,
		"key_chosen_ascii": 65,
		"key_chosen_char": "A",
		"yes_key": "A",
		"no_key": "L"
	},
	//(...)
```

# Experiment data store (server setup)

Researchers and master students should be able log in to the (experiment data store)[https://experiment-datastore.lab.hum.uu.nl/] with their Solis ID. This application enables researchers to configure their jsPsych experiment to collect collect real 'production' data. The documentation for this process will appear in the [generic documentation](https://github.com/UiL-OTS-labs/jspsych-uil-template-docs).
 