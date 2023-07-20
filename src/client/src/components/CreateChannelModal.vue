<template>
	<div
		class="modal fade"
		id="newRoomModal"
		tabindex="-1"
		aria-labelledby="newRoomModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="newRoomModalLabel">Create New Room</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">
					<form>
						<div class="form-group">
							<label for="channelname">Room name:</label>
							<input
								type="text"
								id="channelname"
								class="form-control"
								placeholder="Room name..."
							/>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					<button type="button" class="btn btn-save" data-bs-dismiss="modal" @click="onSubmit">
						Save changes
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { inject } from '@vue/runtime-core';

export default {
	setup() {
		const store = inject('store');
		const { createChannel, currentUser, toggleNavbar } = store();

		const onSubmit = function () {
			const channelName = document.getElementById('channelname').value;
			createChannel(currentUser.value.id, channelName);
			toggleNavbar('channels');
		};

		return {
			onSubmit,
		};
	},
};
</script>

<style scoped>
.btn-save {
	background: rgba(106, 0, 255, 1);
	color: var(--white1);
}

.btn-save:hover {
	filter: brightness(1.2);
}
</style>
