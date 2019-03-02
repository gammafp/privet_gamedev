class Daniela extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);

        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);

        this.bounce = 0.5;
        this.body.collideWorldBounds = true;

        this.acceleration = 200;
        this.body.maxVelocity.x = 150;
        this.body.maxVelocity.y = 500;

        this.jumpForce = 150;
        this.jumpTimer = 0;
        this.jumping = false;

        this.deceleration = 2; // Se usa para desacelerar el personaje cuando se sueltan los botones.
        this.friction = 10; // Se usa para cuando el personaje tiene que devolverse.

        this.anims.play('daniela_idle');

        this.prevAnim = '';
        this.prevAnimJump = '';
        this.cursor = this.scene.input.keyboard.createCursorKeys();
    }

    update(delta) {
        if (this.cursor.up.isDown ||
            this.cursor.right.isDown ||
            this.cursor.left.isDown ||
            this.cursor.down.isDown) {
            this.jumpTimer -= delta;

            // Right
            if (this.cursor.right.isDown) {
                if (this.body.velocity.y === 0 && this.prevAnim == 'left') {
                    if (Math.abs(this.body.velocity.x) > 100) {
                        this.walk(this.acceleration * this.deceleration * this.friction);
                    } else {
                        this.walk(this.acceleration);
                    }
                    if (this.prevAnim !== 'left') {
                        this.anims.play('daniela_walk');
                        this.flipX = true;
                    }
                    this.prevAnim = 'left';
                } else {
                    // Desaceleración aereo
                    this.walk(this.acceleration * 3);
                }


            }
            // Left
            else if (this.cursor.left.isDown) {
                if (this.body.velocity.y === 0) {
                    // TODO: corregir movimiento
                    if (this.body.velocity.x > 100 && this.prevAnim == 'right') {
                        this.walk(-(this.acceleration * this.deceleration * this.friction));
                    } else {
                        this.walk(-this.acceleration);
                    }
                    if (this.prevAnim !== 'right') {
                        this.anims.play('daniela_walk');
                        this.flipX = false;
                    }
                    this.prevAnim = 'right';

                } else {
                    // Desaceleración aérea
                    this.walk(-this.acceleration * 3);
                }

            }
            // UP/jump

            if (this.cursor.up.isDown && (!this.jumping || this.jumpTimer > 0)) {
                if (this.body.velocity.y < 0 || this.body.blocked.down) {
                    this.body.setVelocityY(-this.jumpForce);
                }
                if (!this.jumping) {
                    this.jumpTimer = 300;
                }
                this.jumping = true;
                if (this.prevAnim != 'jump') {
                    this.anims.play('daniela_idle');
                }
                this.prevAnim = 'jump';

            } else if (!this.cursor.up.isDown) {
                this.jumpTimer = -1; // Don't resume jump if button is released, prevents mini double-jumps
                console.log('False')
                if (this.body.blocked.down) {
                    this.jumping = false;
                }
            }

        } else {
            if (!this.cursor.up.isDown) {
                this.jumpTimer = -1; // Don't resume jump if button is released, prevents mini double-jumps
                console.log('False')
                if (this.body.blocked.down) {
                    this.jumping = false;
                }
            }
            // Whitout movement: Idle
            if (this.body.blocked.down) {
                if (this.body.velocity.x > 10) {
                    if (this.prevAnimJump !== 'right') {
                        this.anims.play('daniela_walk');
                    }
                    this.prevAnimJump = 'right';
                } else if (this.body.velocity.x < -10) {
                    if (this.prevAnimJump !== 'left') {
                        this.anims.play('daniela_walk');
                    }
                    this.prevAnimJump = 'left';
                }
                if (Math.abs(this.body.velocity.x) < 10) {
                    this.body.setVelocityX(0);
                    this.walk(0);
                    if (this.prevAnim !== 'idle') {
                        this.anims.play('daniela_idle');
                    }
                    this.prevAnim = 'idle';
                } else {
                    this.walk(((this.body.velocity.x > 0) ? -1 : 1) * this.acceleration * this.deceleration);
                }
            } else {
                this.walk(0);
            }
        }

    }

    walk(velocity) {
        this.body.setAccelerationX(velocity);
    }
}
export default Daniela;